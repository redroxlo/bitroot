import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./individual.module.css";

const Individual = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid black',
    boxShadow: 24
  };
  console.log(data);
  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + " " + month + " " + year + " ";
    return time;
  };
  return (
    <>
      <div className={styles.container}>
        <div onClick={handleOpen} className={styles.img_container}>
          <img src={data.thumbnail.large} alt="" />
          <div>Learn More</div>
        </div>
        <div className={styles.content}>
          <div className={styles.box}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.title}>{data.title}</div>
          <p className={styles.para}>{data.content}</p>
          <div className={styles.desc_container}>
            <div>
              <div>
                {data.author.name} - {data.author.role}
              </div>
              <div></div>
            </div>
            <div>{timeConverter(data.date)}</div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} className={styles.closeBtn} />
          <div className={styles.img_container}>
            <img src={data.thumbnail.large} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{data.title}</div>
            <p className={styles.para}>{data.content}</p>
            <div className={styles.prof_container}>
              <div className={styles.avatarContainer}><img src={data.author.avatar?data.author.avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" } alt="avatar" /></div>
                <div> {data.author.name} - {data.author.role}</div>
           
            </div>
          </div>
        </Box>
      </Modal>

{/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </>
  );
};

export default Individual;
