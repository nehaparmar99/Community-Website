import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "./Modal.module.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={styles.modals}>
            <h1 className={styles.mod_head}>{props.data.head}</h1>
            <div className={styles.maincont}>
              <img
                src={props.data.img}
                className={styles.image}
                alt="dummy_img"
              />
              <div className={styles.cont}>{props.data.desc}</div>
            </div>
            <h1 className={styles.mod_head}>Link</h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
