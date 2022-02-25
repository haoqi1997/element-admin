<template>
  <div class="lottery-container">
    <a-row class="marginBottom" :gutter="16">
      <a-col :xs="24" :md="24" :sm="24" :lg="24" :xl="6">
        <a-card title="图表" :hoverable="true" :bordered="false">
          <gauge />
        </a-card>
      </a-col>
      <a-col :xs="24" :md="24" :sm="24" :lg="24" :xl="6">
        <a-card title="九宫格抽奖" :hoverable="true" :bordered="false">222222222222222222222</a-card>
      </a-col>
      <a-col :xs="24" :md="24" :sm="24" :lg="24" :xl="6">
        <a-card title="九宫格抽奖" :hoverable="true" :bordered="false">3333333333333333333</a-card>
      </a-col>
      <a-col :xs="24" :md="24" :sm="24" :lg="24" :xl="6">
        <a-card title="九宫格抽奖" :hoverable="true" :bordered="false">44444444444444444444444</a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import gauge from './components/gauge.vue'
export default {
  name: 'dataV',
  components: { gauge },
  data () {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.lottery-container {
  width: 100%;
  .marginBottom {
    margin-bottom: 25px;
  }
}
</style>
