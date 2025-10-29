<template>
  <div class="app-container">

    <!-- Create Role -->
    <div style="margin-bottom: 16px;">
      <el-button type="primary" icon="el-icon-plus" @click="openAddDialog">
        {{ $t('role.addRole') || 'Add Role' }}
      </el-button>
    </div>

    <el-table v-loading="loading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.index }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" :label="$t('table.name')">
        <template slot-scope="scope">
          <span>{{ scope.row.name | uppercaseFirst }}</span>
        </template>
      </el-table-column>

      <el-table-column align="left" :label="$t('table.description')">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="320" v-permission="['manage premissions edit']">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="handleEditPermissions(scope.row.id)">
            {{ $t('permission.editPermission') }}
          </el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="confirmDelete(scope.row)">
            {{ $t('role.delete') || 'Delete' }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Edit permissions dialog -->
    <el-dialog :visible.sync="dialogVisible" :title="'Edit Permissions - ' + currentRole.name">
      <div class="form-container" v-loading="dialogLoading">
        <div class="permissions-container">
          <div class="block">
            <el-form :model="currentRole" label-width="80px" label-position="top">
              <el-form-item label="Menus">
                <el-tree
                  ref="menuPermissions"
                  :data="menuPermissions"
                  :default-checked-keys="permissionKeys(roleMenuPermissions)"
                  :props="permissionProps"
                  show-checkbox
                  node-key="id"
                  class="permission-tree"
                />
              </el-form-item>
            </el-form>
          </div>
          <div class="block">
            <el-form :model="currentRole" label-width="80px" label-position="top">
              <el-form-item label="Permissions">
                <el-tree
                  ref="otherPermissions"
                  :data="otherPermissions"
                  :default-checked-keys="permissionKeys(roleOtherPermissions)"
                  :props="permissionProps"
                  show-checkbox
                  node-key="id"
                  class="permission-tree"
                />
              </el-form-item>
            </el-form>
          </div>
          <div class="clear-left"></div>
        </div>
        <div style="text-align:right;">
          <el-button type="danger" @click="dialogVisible=false">
            {{ $t('permission.cancel') }}
          </el-button>
          <el-button type="primary" @click="confirmPermission">
            {{ $t('permission.confirm') }}
          </el-button>
        </div>
      </div>
    </el-dialog>

    <!-- Create role dialog -->
    <el-dialog :visible.sync="addDialogVisible" :title="$t('role.createTitle') || 'Create New Role'">
      <div class="form-container" v-loading="dialogLoading">
        <el-form :model="newRole" label-position="top" label-width="100px">
          <el-form-item :label="$t('role.name') || 'Role Name'">
            <el-input v-model="newRole.name" />
          </el-form-item>

          <el-form-item label="Menus">
            <el-tree
              ref="newMenuPermissions"
              :data="menuPermissions"
              :props="permissionProps"
              show-checkbox
              node-key="id"
              class="permission-tree"
            />
          </el-form-item>

          <el-form-item label="Permissions">
            <el-tree
              ref="newOtherPermissions"
              :data="otherPermissions"
              :props="permissionProps"
              show-checkbox
              node-key="id"
              class="permission-tree"
            />
          </el-form-item>
        </el-form>
        <div style="text-align:right;">
          <el-button type="danger" @click="addDialogVisible=false">
            {{ $t('permission.cancel') || 'Cancel' }}
          </el-button>
          <el-button type="primary" @click="submitNewRole">
            {{ $t('role.create') || 'Create' }}
          </el-button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Resource from '@/api/resource';
import RoleResource from '@/api/role';
import waves from '@/directive/waves';
import permission from '@/directive/permission';
import checkPermission from '@/utils/permission';

const roleResource = new RoleResource();
const permissionResource = new Resource('permissions');

export default {
  name: 'RoleList',
  directives: { waves, permission },
  data() {
    return {
      currentRoleId: 1,
      list: [],
      loading: true,
      dialogLoading: false,
      dialogVisible: false,

      // create role dialog
      addDialogVisible: false,
      newRole: { name: '' },

      // permission data
      permissions: [],
      menuPermissions: [],
      otherPermissions: [],
      permissionProps: {
        children: 'children',
        label: 'name',
        disabled: 'disabled',
      },
    };
  },
  computed: {
    currentRole() {
      const found = this.list.find(role => role.id === this.currentRoleId);
      if (found === undefined) {
        return { name: '', permissions: [] };
      }
      return found;
    },
    rolePermissions() {
      return this.classifyPermissions(this.currentRole.permissions).all;
    },
    roleMenuPermissions() {
      return this.classifyPermissions(this.currentRole.permissions).menu;
    },
    roleOtherPermissions() {
      return this.classifyPermissions(this.currentRole.permissions).other;
    },
  },
  created() {
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    checkPermission,

    async getRoles() {
      this.loading = true;
      const { data } = await roleResource.list({});
      this.list = data;
      this.list.forEach((role, index) => {
        role.index = index + 1;
        role.description = this.$t('roles.description.' + role.name);
      });
      this.loading = false;
    },

    async getPermissions() {
      const { data } = await permissionResource.list({});
      const { all, menu, other } = this.classifyPermissions(data);
      this.permissions = all;
      this.menuPermissions = menu;
      this.otherPermissions = other;
    },

    classifyPermissions(permissions) {
      const all = []; const menu = []; const other = [];
      permissions.forEach(permission => {
        const permissionName = permission.name;
        all.push(permission);
        if (permissionName.startsWith('view menu')) {
          menu.push(this.normalizeMenuPermission(permission));
        } else {
          other.push(this.normalizePermission(permission));
        }
      });
      return { all, menu, other };
    },

    normalizeMenuPermission(permission) {
      return { id: permission.id, name: this.$options.filters.uppercaseFirst(permission.name.substring(10)) };
    },

    normalizePermission(permission) {
      return { id: permission.id, name: this.$options.filters.uppercaseFirst(permission.name), disabled: permission.name === 'manage permission' };
    },

    permissionKeys(permissions) {
      return permissions.map(p => p.id);
    },

    // Edit existing role permissions
    handleEditPermissions(id) {
      this.dialogVisible = true;
      this.currentRoleId = id;
      this.$nextTick(() => {
        this.$refs.menuPermissions.setCheckedKeys(this.permissionKeys(this.roleMenuPermissions));
        this.$refs.otherPermissions.setCheckedKeys(this.permissionKeys(this.roleOtherPermissions));
      });
    },

    confirmPermission() {
      const checkedMenu = this.$refs.menuPermissions.getCheckedKeys();
      const checkedOther = this.$refs.otherPermissions.getCheckedKeys();
      const checkedPermissions = checkedMenu.concat(checkedOther);
      this.dialogLoading = true;

      roleResource.update(this.currentRole.id, { permissions: checkedPermissions }).then(() => {
        this.$message.success('Permissions has been updated successfully');
        this.dialogLoading = false;
        this.dialogVisible = false;
        this.getRoles();
      }).catch(() => {
        this.dialogLoading = false;
      });
    },

    // Create role
    openAddDialog() {
      this.newRole = { name: '' };
      this.addDialogVisible = true;
      this.$nextTick(() => {
        if (this.$refs.newMenuPermissions) this.$refs.newMenuPermissions.setCheckedKeys([]);
        if (this.$refs.newOtherPermissions) this.$refs.newOtherPermissions.setCheckedKeys([]);
      });
    },

    async submitNewRole() {
      const checkedMenu = this.$refs.newMenuPermissions ? this.$refs.newMenuPermissions.getCheckedKeys() : [];
      const checkedOther = this.$refs.newOtherPermissions ? this.$refs.newOtherPermissions.getCheckedKeys() : [];
      const permissions = checkedMenu.concat(checkedOther);

      if (!this.newRole.name) {
        this.$message.warning('Role name is required');
        return;
      }

      this.dialogLoading = true;
      try {
        await roleResource.store({ name: this.newRole.name, permissions });
        this.$message.success('Role created successfully');
        this.addDialogVisible = false;
        await this.getRoles();
      } catch (e) {
        this.$message.error('Failed to create role');
      } finally {
        this.dialogLoading = false;
      }
    },

    // Delete role
    async confirmDelete(role) {
      this.$confirm(
        `Are you sure you want to delete the role "${role.name}"?`,
        'Warning',
        { confirmButtonText: 'Yes', cancelButtonText: 'Cancel', type: 'warning' }
      ).then(async () => {
        try {
          await roleResource.destroy(role.id);
          this.$message.success('Role deleted successfully');
          this.getRoles();
        } catch (e) {
          if (e.response && e.response.status === 422) {
            this.$message.error(e.response.data.message || 'Role is assigned to users and cannot be deleted');
          } else {
            this.$message.error('Failed to delete role');
          }
        }
      }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.permissions-container {
  flex: 1;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  .block {
    float: left;
    min-width: 250px;
  }
  .clear-left {
    clear: left;
  }
}
</style>
