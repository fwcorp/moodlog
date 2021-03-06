import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import firebase from "../../firebase";
import Cookie from "universal-cookie";

const db = firebase.firestore();

let moodData = [];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    minwidth: 450,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  satisfied: {
    color: "green",
  },
}));

function renderRow(props) {
  const { index, style } = props;
  //console.log(props);
  if (index < moodData.length) {
    if (moodData[index].mood === 0) {
      return (
        <ListItem button style={style} key={index}>
          <ListItemAvatar>
            <Avatar>
              <SentimentSatisfiedAltIcon style={{ color: "green" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={moodData[index].description}
            secondary={new Date(moodData[index].timestamp).toDateString()}
          />
        </ListItem>
      );
    } else if (moodData[index].mood === 1) {
      return (
        <ListItem button style={style} key={index}>
          <ListItemAvatar>
            <Avatar>
              <SentimentDissatisfiedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={moodData[index].description}
            secondary={new Date(moodData[index].timestamp).toDateString()}
          />
        </ListItem>
      );
    } else {
      return (
        <ListItem button style={style} key={index}>
          <ListItemAvatar>
            <Avatar>
              <SentimentVeryDissatisfiedIcon style={{ color: "red" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={moodData[index].description}
            secondary={new Date(moodData[index].timestamp).toDateString()}
          />
        </ListItem>
      );
    }
  } else {
    return <></>;
  }
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const [didrender, setDidrender] = useState(0);
  const classes = useStyles();
  const cookies = new Cookie();
  let email = cookies.get("email");
  if (email === undefined) email = "";
  useEffect(() => {
    moodData = [];
    db.collection("mood")
      .where("email", "==", email)
      .orderBy("timestamp", "desc")
      .limit(30)
      .get()
      .then(function (querySnapShot) {
        querySnapShot.forEach(function (doc) {
          // console.log(doc.id, " // ", doc.data());
          const obj = {
            id: doc.id,
            timestamp: doc.data().timestamp,
            mood: doc.data().mood,
            description: doc.data().description,
          };
          moodData.push(obj);
        });
        setDidrender(1);
      });

    // db.collection("mood")
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach(function (doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //       const obj = {
    //         id: doc.id,
    //         timestamp: doc.data().timestamp,
    //         mood: doc.data().mood,
    //         description: doc.data().description,
    //       };
    //       really.push(obj);
    //     });
    //     console.log(really);
    //   });
  }, []);

  if (moodData.length === 0) {
    return <h5>Returning data...</h5>;
  } else {
    return (
      <div className={classes.root}>
        <FixedSizeList
          height={400}
          width={400}
          itemSize={90}
          itemCount={moodData.length}
        >
          {renderRow}
        </FixedSizeList>
      </div>
    );
  }
}
