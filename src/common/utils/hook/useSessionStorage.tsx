import React, { useState, useEffect } from 'react'
import isPlainObject from 'lodash/isPlainObject'

export default () => {
  // sessionStorage.setItem("key", "value");
  // var value = sessionStorage.getItem("key");
  // sessionStorage.removeItem("key");
  // sessionStorage.clear();

  sessionStorage.setItem("isLogin", "true");

  const isLogin = sessionStorage.getItem("isLogin");

  sessionStorage.removeItem("key")
}

const useSessionStorage = (key, initialValue={}) => {
  const [value, setValue] =

  const setValue = (value) => {
    if (isPlainObject) {
      const jsonValue = JSON.stringify(value)

    }
  }

}

return [value, setValue, removeValue]


const [value, setValue]
