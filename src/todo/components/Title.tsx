import React from 'react'
import { useTodos } from '../hooks/useTodos'

export const Title = () => {
  const { pendingTodos  }  = useTodos();
  return (
    <div>Title</div>
  )
}
