import React, { useState, useCallback } from 'react'

export default (initVisible = false) => {
  const [visible, setVisible] = useState(initVisible)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  },[])

  return [visible, openModal, closeModal]
}
