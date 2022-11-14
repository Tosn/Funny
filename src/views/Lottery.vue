<template>
  <div class="lottery-box">
    <h3>彩票中中中（纯属娱乐）</h3>
    <div style="margin-top: 10px;">
      <p>彩票种类</p>
      <select v-model="lotteryType">
        <option v-for="op in lotteryOptions" :value="op.value">{{ op.label }}</option>
      </select>
    </div>
    <div style="margin-top: 10px;">
      <p>彩票数量</p>
      <input type="number" v-model="lotteryNumber"/>
    </div>
    <div style="margin-top: 10px;">
      <input type="button" value="生成列表" @click="makeLotteryList">
    </div>
    <div style="margin-top: 10px;">
      <p>彩票结果</p>
      <ul>
        <li v-for="(lottery, index) in lotteryResultList" :key="index" class="item-ball">
          <div v-for="area in lottery">
            <span v-for="ball in area" :key="ball" class="ball">{{ ball }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// 大乐透 01-35（5） 01-12（2）
// 双色球 01-33（6） 01-16（1）
import { ref } from 'vue'
const makeNumberList = (number: number | string): string[] => {
  return Array.from(
    new Array(+number).fill(1), 
    (x, index) => (index + 1).toString().padStart(2, '0')
  )
}

type LotteryType = 'bicolorSphere' | 'lotto'
const lotteryOptions = [
  { label: '双色球', value: 'bicolorSphere' },
  { label: '大乐透', value:  'lotto'}
]
const lotteryNumber = ref<number>(5)
const lotteryType = ref<LotteryType>('bicolorSphere');

interface AreaItem {
  list: string[],
  size: number
}

interface LotteryItem<T> {
  before: T,
  after: T
}

type Lottery<T> = Record<LotteryType, LotteryItem<T>>

const lotteryList:Lottery<AreaItem> = {
  bicolorSphere: {
    before: {
      list: makeNumberList(35),
      size: 5
    },
    after: {
      list: makeNumberList(12),
      size: 2
    }
  },
  lotto: {
    before: {
      list: makeNumberList(33),
      size: 6
    },
    after: {
      list: makeNumberList(16),
      size: 1
    }
  }
}

type LotteryRet = string[]
const lotteryResultList = ref<LotteryRet[][]>([])
const makeLotteryList = () => {
  const ret: LotteryRet[][] = []
  for (let i = 0; i < lotteryNumber.value; i++) {
    ret.push(makeLotteryItem(lotteryType.value))
  }
  lotteryResultList.value = ret
}

const makeLotteryItem = (type: LotteryType): LotteryRet[] => {
  const currentLottery = lotteryList[type];
  const prevArr = makeRandomBall(currentLottery.before)
  const nextArr = makeRandomBall(currentLottery.after)

  return [prevArr, nextArr]
}
const makeRandomBall = (lottery: AreaItem): LotteryRet => {
  // return lottery.list.sort((a, b) => {
  //   return Math.random() > 0.5 ? (+a) - (+b) : (+b) - (+a)
  // }).slice(0, lottery.size).sort()
  const ret:LotteryRet = []
  const _list = lottery.list
  const len = _list.length
  while (ret.length < lottery.size) {
    const _random = Math.round(Math.random() * (len - 1))
    if (!ret.includes(_list[_random])) {
      ret.push(_list[_random])
    }
  }
  return ret.sort()
}
</script>

<style scoped lang="scss">
.lottery-box {
  padding: 20px;
  background-color: #fff;
  color: #000;
}
ul, ul li {
  list-style: none;
}
.item-ball {
  padding: 5px 0;
  display: flex;
  flex-wrap: wrap;
  .ball {
    line-height: 30px;
    text-align: center;
    width: 30px;
    background-color: #1a1ada;
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    font-size: 14px;
    &:not(:first-child) {
      margin-left: 3px;
    }
  }
  & > div {
    white-space: nowrap;
    &:first-child {
      margin-right: 10px;
      margin-bottom: 6px;;
    }
    &:not(:first-child) {
      .ball {
        background-color: #c31212;
      }
    }
  }
}
</style>