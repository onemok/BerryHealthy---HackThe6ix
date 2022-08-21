import React from "react";

function Leaderboard() {
  return (
    <div className="mx-auto">
      <div className="py-4 md:py-24  flex justify-center items-center space-y-20 md:space-y-0  text-center md:text-left ">
        <div class="overflow-x-auto  max-w-4xl flex-grow">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>GEMS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>jane_air</td>
                <td>1</td>
                <td>126</td>
              </tr>
              <tr>
                <td>jen_doe</td>
                <td>2</td>
                <td>98</td>
              </tr>
              <tr>
                <td>beth_bennet</td>
                <td>3</td>
                <td>74</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
