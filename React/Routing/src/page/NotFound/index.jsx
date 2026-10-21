import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className={styles.wrapperContent}>Not Found 404</div>;
}
