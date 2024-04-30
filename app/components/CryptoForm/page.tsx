// import React, { useState } from 'react';
// import { useRouter } from "next/navigation";
// import { User } from '../../functions/Context/UserContext';
// import GetUser from '../../functions/GetUser';
// import styles from './cryptoForm.module.css';

// const CryptoForm = () => {

//   const router = useRouter();
//   const user: User | undefined = GetUser();  
  
//   const [crypto, setCrypto] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;
//     setCrypto((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   crypto._id = user?._id;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     const res = await fetch(`/api/Users/${user?._id}/Crypto`, {
//       method: "PUT",
//       body: JSON.stringify({crypto}),
//       "content-type": "application/json",
//     });

//     if (!res.ok) {
//       const response = await res.json();
//       setErrorMessage(response.message);
//     } else {
//       router.refresh();
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <div className={styles.addContainer}>
//       <div className={styles.container}>
//         <div className={styles.header}>Add Crypto</div>
//         <form
//           onSubmit={handleSubmit}
//           method="post"
//         >
//           <input id="cryptoName"
//             name="cryptoName"
//             type="text"
//             placeholder="Name" 
//             onChange={handleChange}
//             required={true}
//             value={crypto.cryptoName}
//             className={styles.input}
//           />
//           <input id="cryptoAmount"
//             name="cryptoAmount"
//             type="text"
//             placeholder="Shares" 
//             onChange={handleChange}
//             required={true}
//             value={crypto.cryptoAmount}
//             className={styles.input}
//           />
//           <input  id="cryptoPurchasePrice"
//             name="cryptoPurchasePrice"
//             type="text"
//             placeholder="Purchase Price no $" 
//             onChange={handleChange}
//             required={true}
//             value={crypto.cryptoPurchasePrice}
//             className={styles.input}
//           />
//           <input
//             type="submit"
//             value="Add"
//             className={styles.submission}
//           />
//           </form>
//         </div>
//     </div>
//   )
// }

// export default CryptoForm;
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { User } from '../../functions/Context/UserContext';
import GetUser from '../../functions/GetUser';
import styles from './cryptoForm.module.css';

const CryptoForm = () => {

  const router = useRouter();
  const user: User | undefined = GetUser();  
  
  const [crypto, setCrypto] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCrypto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  crypto._id = user?._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // If it doesn't work, I added a the /Crypto dir, so delete
    const res = await fetch(`/api/Users/${user?._id}/Crypto`, {
      method: "PUT",
      body: JSON.stringify({crypto}),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };
  return (
    <div className={styles.addContainer}>
      <div className={styles.container}>
        <div className={styles.header}>Add Crypto</div>
        <form
          onSubmit={handleSubmit}
          method="post"
        >
          <input id="cryptoName"
            name="cryptoName"
            type="text"
            placeholder="Name" 
            onChange={handleChange}
            required={true}
            value={crypto.cryptoName}
            className={styles.input}
          />
          <input id="cryptoAmount"
            name="cryptoAmount"
            type="text"
            placeholder="Shares" 
            onChange={handleChange}
            required={true}
            value={crypto.cryptoAmount}
            className={styles.input}
          />
          <input  id="cryptoPurchasePrice"
            name="cryptoPurchasePrice"
            type="text"
            placeholder="Purchase Price no $" 
            onChange={handleChange}
            required={true}
            value={crypto.cryptoPurchasePrice}
            className={styles.input}
          />
          <input
            type="submit"
            value="Add"
            className={styles.submission}
          />
          </form>
        </div>
    </div>
  )
}

export default CryptoForm;