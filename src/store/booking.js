import { computed, reactive, ref } from 'vue'
import { services } from '../config/content'

const selectedIds = ref([])

export function useBooking() {
  const selectedServices = computed(() =>
    services.filter((s) => selectedIds.value.includes(s.id)),
  )
  const totalPrice = computed(() =>
    selectedServices.value.reduce((sum, s) => sum + s.price, 0),
  )
  const totalDuration = computed(() =>
    selectedServices.value.reduce((sum, s) => sum + s.duration, 0),
  )
  const count = computed(() => selectedServices.value.length)

  function toggle(id) {
    selectedIds.value = selectedIds.value.includes(id)
      ? selectedIds.value.filter((x) => x !== id)
      : [...selectedIds.value, id]
  }
  function isSelected(id) {
    return selectedIds.value.includes(id)
  }
  function setFromList(list) {
    selectedIds.value = list.filter((id) => services.some((s) => s.id === id))
  }
  function clear() {
    selectedIds.value = []
  }

  return reactive({
    selectedIds,
    selectedServices,
    totalPrice,
    totalDuration,
    count,
    toggle,
    isSelected,
    setFromList,
    clear,
  })
}
