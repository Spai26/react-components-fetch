/* eslint-disable react/prop-types */
function Home({ data }) {
  console.log(data);
  return (
    <>
      <h1>Welcome to test repository</h1>
      <p>
        The purpose of this repository is only for integration testing with an
        API, also to rule out future errors and new small-scale implementations.
      </p>
      <div>
        <pre>{data}</pre>
      </div>
      <button
        style={{ backgroundColor: data ? "green" : "red", color: "white" }}
      >
        {data ? "Active" : "Inactive"}
      </button>
    </>
  );
}

export default Home;
