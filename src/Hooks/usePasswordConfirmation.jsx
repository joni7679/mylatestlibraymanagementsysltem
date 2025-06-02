import { useState } from "react";
import PasswordPopUp from "../Components/PasswordPopUp";

const usePasswordConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [callback, setCallback] = useState(null);

  // requestepasswordCheck logic here......
  const requestPasswordCheck = (onSuccessCallback) => {
    setCallback(() => onSuccessCallback);
    setIsOpen(true);
  };

  const onSuccess = () => {
    if (callback) callback();
    setIsOpen(false);
  };

  const PasswordModalComponent = () => {
    return (
      <PasswordPopUp
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={onSuccess}
      />
    );
  };

  return { requestPasswordCheck, PasswordModalComponent };
};

export default usePasswordConfirmation;
