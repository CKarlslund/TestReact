import React from 'react';

const Tabs = ({ tabs }) => {
    function removePost(event, id){
        fetch('https://testwebapi666.azurewebsites.net/tabs/', 
        {
            method: 'get',
        })
    }

    return (
      <div>
        <center><h1>Tabs</h1></center>
        {tabs.map((tab) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{tab.title}</h5>
              <h6 class="card-title">{tab.author}</h6>
            </div>
          </div>
        ))}
      </div>
    )
  };

export default Tabs;