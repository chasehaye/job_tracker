import { checkToken } from "../utilities/users-service";

export default function JobList(){

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Jobs List</h1>
      <button onClick={handleCheckToken}>Check expiration</button>
    </>
  );
}

