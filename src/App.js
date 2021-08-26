import React from "react";

import Profile from "./Components/profile/Profile";
import Statistics from "./Components/statistics/Statistics";
import FriendList from "./Components/friendList/FriendList/FriendList";
import Transactions from "./Components/transactions/Transactions";

import user from "./data/user.json";
import statisticData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => (
  <>
   <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    <Statistics title="Upload Stats" stats={statisticData} />
    <FriendList friends={friends} />
    <Transactions items={transactions} />
  </>
);

export default App;
