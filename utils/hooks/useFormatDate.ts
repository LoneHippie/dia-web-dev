import React from 'react'
import { useMemo } from 'react'

const useFormatDate = (date: string) => {
    const formattedDate = useMemo(() => {
        const format = new Date(date)
        return format.toDateString().slice(4)
    }, [date])

    return {
        formattedDate
    }
}

export default useFormatDate