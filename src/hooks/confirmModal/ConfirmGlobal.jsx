import { useRef, useState } from "react"
import ConfirmDialog from "./ConfirmDialog"

// Cette variable servira de "ref"
const confirmAction = {
    current: (p) => Promise.resolve(true),
}

export function confirm(props) {
    return confirmAction.current(props)
}

export function ConfirmGlobal() {
  const [open, setOpen] = useState(false)
  const [props, setProps] = useState({})

  // On sauvegarde la fonction de résolution de la promesse
  const resolveRef = useRef((v) => {})

  // On modifie confirmAction pour le connecter à notre composant
  confirmAction.current = (props) =>
    new Promise((resolve) => {
      setProps(props)
      setOpen(true)
      resolveRef.current = resolve
    })

  const onConfirm = () => {
    resolveRef.current(true)
    setOpen(false)
  }

  const onCancel = () => {
    resolveRef.current(false)
    setOpen(false)
  }

  return (
    <ConfirmDialog
      onConfirm={onConfirm}
      onClose={onCancel}
      isOpen={open}
      {...props}
    />
  )
}