import React, { useEffect } from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../store/notificationsReducer';

function Notifications({type, message}) {
    const isOpen = useSelector((state) => state.notification.notification.open);
    const dispatch = useDispatch();

    useEffect(() => {
      if (isOpen) {
          const timer = setTimeout(() => {
              handleClose();
          }, 3000);

          return () => {
              clearTimeout(timer);
          };
      }
  }, [isOpen]);

  function handleClose() {
    dispatch(showNotification({
        open: false
    }))
  }

  return (
    <div  style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "9", opacity: 0.95 }}>
        {isOpen && <Alert onClick={handleClose} variant="filled" severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notifications