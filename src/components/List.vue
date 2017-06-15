<template>
  <div>
  
  
  
    <div>这是列表展示页面，用到了table组件</div>
  
  
  
    <el-table :data="tableData" stripe>
  
  
  
      <el-table-column prop="applyDate" label="申请日期" align="center">
  
  
  
      </el-table-column>
  
  
  
      <el-table-column prop="applyAmount" label="借款金额(万元)" align="center">
  
  
  
      </el-table-column>
  
  
  
      <el-table-column prop="periods.itemName" label="借款期限" align="center">
  
  
  
      </el-table-column>
  
      <el-table-column prop="interestRate" label="借款利率" align="center">
  
  
  
      </el-table-column>
  
      <el-table-column prop="status.itemName" label="状态" align="center">
  
  
  
      </el-table-column>
  
      <el-table-column prop="address" label="操作" align="center">
  
        <template scope="scope">
  
          <el-button
  
            size="small"
  
            @click="handleEdit(scope.$index, scope.row)">
            查看详情
          </el-button>
  
       </template>
      </el-table-column>
  
    </el-table>
    <el-button @click="gotoIndex">回到首页</el-button>
  </div>
</template>

<script>
  export default {
    name: 'list',
  
    data() {
  
      return {
  
        tableData: []
  
      }
  
    },
  
    mounted() {
  
      this.api.getFinaceList().then((res) => {
  
        this.tableData = res.data.result
      })
    },
    methods: {
      gotoIndex () {
       this.$router.push('./index')
      }
    }
  }
</script>