<?php
/**
 * File RoleController.php
 *
 * @author Tuan Duong <bacduong@gmail.com>
 * @package Laravue
 * @version 1.0
 */
namespace App\Http\Controllers;

use App\Http\Resources\PermissionResource;
use App\Laravue\Models\Permission;
use App\Laravue\Models\User;
use Illuminate\Http\Request;
use App\Laravue\Models\Role;
use App\Http\Resources\RoleResource;
use Illuminate\Support\Facades\Auth;

/**
 * Class RoleController
 *
 * @package App\Http\Controllers
 */
class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        logy( auth()->user()->id , 'index' , '' , 'role' , [] );
        return RoleResource::collection(Role::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        logy(auth()->user()->id, 'create', '', 'role', []);

        $request->validate([
            'name' => 'required|string|unique:roles,name',
            'permissions' => 'array',
            'permissions.*' => 'integer|exists:permissions,id',
        ]);

        $role = Role::create([
            'name' => $request->name,
            'guard_name' => 'api',
        ]);

        if ($request->has('permissions')) {
            $permissions = Permission::allowed()->whereIn('id', $request->permissions)->get();
            $role->syncPermissions($permissions);
        }

        return new RoleResource($role);
    }

    /**
     * Display the specified resource.
     *
     * @param  Role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Role $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        logy( auth()->user()->id , 'edit' , '' , 'role' , [] );
        if ($role === null || $role->isAdmin()) {
            // return response()->json(['error' => 'Role not found'], 404);
        }

        $permissionIds = $request->get('permissions', []);
        $permissions = Permission::allowed()->whereIn('id', $permissionIds)->get();
        $role->syncPermissions($permissions);
        $role->save();
        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        logy(auth()->user()->id, 'delete', '', 'role', []);

        if ($role->isAdmin()) {
            return response()->json(['error' => 'Admin role cannot be deleted'], 403);
        }

        // Prevent deleting a role that is assigned to users
        $userCount = \App\Laravue\Models\User::role($role->name)->count();
        if ($userCount > 0) {
            return response()->json([
                'error' => 'ROLE_ASSIGNED',
                'message' => "Role is assigned to {$userCount} user(s)"
            ], 422);
        }

        // Clean up pivot table (role_has_permissions)
        $role->syncPermissions([]);

        $role->delete();

        return response()->json(['message' => 'Role deleted successfully']);
    }

    /**
     * Get permissions from role
     *
     * @param  Role $role
     * @return \Illuminate\Http\Response
     */
    public function permissions(Role $role)
    {
        logy( auth()->user()->id , 'premissions' , '' , 'role' , [] );
        return PermissionResource::collection($role->permissions);
    }
}
