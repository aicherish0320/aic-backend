import { watchSwitchLang } from '@/utils/i18n'
import { ref, watch } from 'vue'
import getDynamicData from './dynamicData'

export const dynamicData = ref(getDynamicData())

watchSwitchLang(() => {
  dynamicData.value = getDynamicData()
  initSelectDynamicLabel()
})

export const selectDynamicLabel = ref([])

const initSelectDynamicLabel = () => {
  selectDynamicLabel.value = dynamicData.value.map((item) => item.label)
}

initSelectDynamicLabel()

export const tableColumns = ref([])

watch(
  selectDynamicLabel,
  (val) => {
    tableColumns.value = []
    const selectData = dynamicData.value.filter((item) => {
      return val.includes(item.label)
    })
    tableColumns.value.push(...selectData)
  },
  {
    immediate: true
  }
)
