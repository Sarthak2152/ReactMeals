import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/UserProgressProvider";
import { useContext } from "react";
function CheckoutModal() {
  const UserProgressCtx = useContext(UserProgressContext);
  function handleClose() {
    UserProgressCtx.hideCheckOut();
  }
  return (
    <Modal open={UserProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <label>Enter name:</label>
        <input type="text"></input>
      </form>
    </Modal>
  );
}

export default CheckoutModal;
