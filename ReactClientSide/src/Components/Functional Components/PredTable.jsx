import React from "react";
import ReactTable from "./ReactTable";

export default function PredTable(props) {
  const prediction = props.predResult;

  const tweet_data = [
    {
      likes: 13,
      replies: 14,
      retweets: 15,
    },
  ];
  const tweet_columns = [
    {
      Header: "Tweet",
      columns: [
        {
          Header: "Likes",
          accessor: "likes", // accessor is the "key" in the data
        },
        {
          Header: "Retweets",
          accessor: "retweets", // accessor is the "key" in the data
        },
        {
          Header: "Replies",
          accessor: "replies", // accessor is the "key" in the data
        },
      ],
    },
  ];
  const sent_data = [
    {
      neg: 14,
      pos: 12,
      neu: 10,
    },
  ];
  const sent_columns = [
    {
      Header: "Sentiment",
      columns: [
        {
          Header: "Positive",
          accessor: "pos",
        },
        {
          Header: "Neutral",
          accessor: "neu",
        },
        {
          Header: "Negative",
          accessor: "neg",
        },
      ],
    },
  ];
  const user_data = [
    {
      userEngagement: 100,
    },
  ];
  const user_columns = [
    {
      Header: "User Engagement",
      accessor: "userEngagement",
    },
  ];
  return (
    <div style={{ display: "grid" }}>
      <ReactTable columns={tweet_columns} data={tweet_data}></ReactTable>
      <ReactTable columns={sent_columns} data={sent_data}></ReactTable>
      <ReactTable columns={user_columns} data={user_data}></ReactTable>
    </div>
  );
}
