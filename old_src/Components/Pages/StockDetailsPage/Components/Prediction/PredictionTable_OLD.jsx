import React from "react";
import ReactTable from "./ReactTable";

export default function PredictionTable(props) {
  if (!props.hasOwnProperty("tweet")) {
    return "";
  }
  const tableData = props.tableData;

  const tweet_data = [{}];
  const user_data = [{}];
  const sentiment_data = [{}];
  const tweet_columns = [];
  const user_columns = [];
  const sentiment_columns = [];
  var only_compound_stat = false;

  Object.keys(tweet).forEach((key) => {
    if (key === "tweet_stats") {
      Object.keys(tweet[key]).forEach((key2) => {
        if (key2 === "sentiment") {
          if (tweet[key][key2].hasOwnProperty("pos")) {
            Object.keys(tweet[key][key2]).forEach((key3) => {
              sentiment_data[0][key3] = tweet[key][key2][key3];
              sentiment_columns.push({
                Header: key3.charAt(0) + key3.slice(1),
                accessor: key3,
              });
            });
          } else {
            sentiment_data[0][key2] = tweet[key][key2];
            sentiment_columns.push({
              Header: key2.charAt(0) + key2.slice(1),
              accessor: key2,
            });
            only_compound_stat = true;
          }
        } else {
          tweet_data[0][key2] = tweet[key][key2];
          tweet_columns.push({
            Header: key2.charAt(0) + key2.slice(1),
            accessor: key2,
          });
        }
      });
    } else if (key === "user_engagement") {
      user_data[0][key] = tweet[key].toFixed(2);
      user_columns.push({
        Header: key.charAt(0) + key.slice(1),
        accessor: key,
      });
    }
  });

  const tweet_cols = [
    {
      Header: "Tweet",
      columns: tweet_columns,
    },
  ];
  const sent_cols = [
    {
      Header: "Sentiment",
      columns: sentiment_columns,
    },
  ];
  return (
    <div style={{ display: "grid" }}>
      <ReactTable columns={tweet_cols} data={tweet_data}></ReactTable>
      <ReactTable
        columns={only_compound_stat ? sentiment_columns : sent_cols}
        data={sentiment_data}
      ></ReactTable>
      <ReactTable columns={user_columns} data={user_data}></ReactTable>
    </div>
  );
}

// const sent_data1 = [
//   {
//     neg: 14,
//     pos: 12,
//     neu: 10,
//   },
// ];
// const tweet_data1 = [
//   {
//     likes: 13,
//     replies: 14,
//     retweets: 15,
//   },
// ];
// const user_data1 = [
//   {
//     userEngagement: 100,
//   },
// ];
// const user_columns1 = [
//   {
//     Header: "User Engagement",
//     accessor: "userEngagement",
//   },
// ];
