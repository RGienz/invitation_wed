import { ref } from 'vue'

export interface MapDestinations {
  church: string
  venue: string
}

export function useLocationMap() {
  const isMapModalOpen = ref(false)

  const mapUrls: MapDestinations = {
    church: 'https://maps.google.com/?q=Cathedral+Church+Los+Angeles',
    venue: 'https://maps.google.com/?q=1548+Estate+Road+Los+Angeles+CA'
  }

  const openMapModal = () => {
    isMapModalOpen.value = true
  }

  const closeMapModal = () => {
    isMapModalOpen.value = false
  }

  return {
    isMapModalOpen,
    mapUrls,
    openMapModal,
    closeMapModal
  }
}