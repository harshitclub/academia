"use client";
import axios from "axios";
import React from "react";
import "./style.css";
import BigDivider from "@/components/BigDivider/BigDivider";

function VerifyVoucher() {
  const [voucherId, setVoucherId] = React.useState({
    hashVoucher: "",
  });
  const [isVerified, setIsVerified] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const verifyVoucher = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/verifyvoucher", voucherId);

      setIsVerified(res.data.message);
    } catch (error: any) {
      console.log("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="verifyVoucher flex width100 alignStart justifyCenter">
      <div className="verifyContainer width95">
        <h2>Verify Voucher</h2>
        <BigDivider />
        <div className="vvBox flex alignCenter justifyStart">
          <div className="vvInput">
            <input
              placeholder="Enter Voucher ID"
              type="text"
              value={voucherId.hashVoucher}
              onChange={(e) =>
                setVoucherId({ ...voucherId, hashVoucher: e.target.value })
              }
            />
          </div>
          <div className="vvBtn">
            <button onClick={verifyVoucher}>Verify</button>
          </div>
          <div className="vvContent flex alignCenter justifyCenter">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <p className="">{isVerified ? `${isVerified}` : ""}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyVoucher;
