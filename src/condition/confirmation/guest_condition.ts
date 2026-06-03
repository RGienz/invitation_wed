import { ref } from 'vue'

export interface RSVPPayload {
    code : string,
    name: string
    attending: string
    message: string
    notToAttendMessageReg : string
}

export function guest_confirmations() {
    const rsvpData = ref<RSVPPayload>({
        code : '',
        name: '',
        attending: '',
        message: '',
        notToAttendMessageReg : ''
    })

  const isSubmitted = ref(false)

  const setAttendance = (status: 'yes' | 'no') => {
        rsvpData.value.attending = status
        if (status === 'yes') {
            rsvpData.value.notToAttendMessageReg = ''
        }
    }

    const submitRSVP = () => {
        rsvpData.value.code = rsvpData.value.code.trim().toUpperCase()
        
        if (rsvpData.value.code.length !== 6) {
            alert('Please enter a valid 6-character invitation code.')
            return
        }

        if(rsvpData.value.attending === 'no' && !rsvpData.value.notToAttendMessageReg.trim()) {
            alert('Please let the bride and groom know why you cannot attend.')
        }

        const cleanPayload = JSON.parse(JSON.stringify(rsvpData.value))
        console.log('Detailed RSVP Payload Generated:', cleanPayload)

        isSubmitted.value = true
    }

    return {
        rsvpData,
        isSubmitted,
        setAttendance,
        submitRSVP
    }
}