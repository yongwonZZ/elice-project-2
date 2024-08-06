import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/boardingPass/BoardingPassDetails.module.css";
import Header from "../../components/Header";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

interface BoardingPassProps {
  setTicketCount: React.Dispatch<React.SetStateAction<number>>;
}

const BoardingPassDetails: React.FC<BoardingPassProps> = ({
  setTicketCount,
}) => {
  const { id } = useParams<{ id: string }>();

  const handleDelete = () => {
    // 티켓 삭제 로직
    setTicketCount((prevCount) => prevCount - 1);
    // 추가적인 삭제 처리 로직이 여기에 들어갑니다.
  };

  const handleShare = () => {
    // 공유 로직
    alert("티켓 정보가 공유되었습니다!");
  };

  return (
    <>
      <Header leftContent={"티켓 상세정보"} />
      <div className={styles["boarding-pass-details"]}>
        <div className={styles["details-header"]}>
          <button className={styles["share-button"]} onClick={handleShare}>
            <AiOutlineShareAlt /> 공유하기
          </button>
        </div>
        <div className={styles["ticket-info"]}>
          <div className={styles["info-section"]}>
            <h3>항공사</h3>
            <p>대한항공</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>항공편</h3>
            <p>KE1234</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>출발지</h3>
            <p>인천 국제공항</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>도착지</h3>
            <p>샌프란시스코 국제공항</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>출발 시간</h3>
            <p>2024-07-30 08:00</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>도착 시간</h3>
            <p>2024-07-30 16:00</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>탑승구</h3>
            <p>12A</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>좌석</h3>
            <p>24C</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>수하물</h3>
            <p>2개</p>
          </div>
        </div>
        <div className={styles["details-footer"]}>
          <button className={styles["delete-button"]} onClick={handleDelete}>
            <FaTrashAlt /> 삭제하기
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardingPassDetails;
