import React from 'react'
import { databases } from '../../Services/database'
import { Query } from 'appwrite'
import conf from '../../Services/conf';

let promise = databases.listDocuments(
  conf.appwriteDatabaseId,
  conf.appwriteCollectionId,
  [
    Query.equal('Category','MEN')
  ]
);

let data;
promise.then(
  function (response) {
    data = response.documents;
    console.log('Success:', response);
    console.log(data[1].name);
  },function (error) {
    console.error('Error:', error);
  }
)

function Home() {
  return (
    <div>
      <h1>Home</h1>

    </div>
  )
}

export default Home