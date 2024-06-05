import Image from "next/image";
import styles from "./transactions.module.css";

const ProfileData = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Uploaded PDFs</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Topic</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Social graphs.pdf
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>SMA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.deleted}`}>
                Deleted
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileData;