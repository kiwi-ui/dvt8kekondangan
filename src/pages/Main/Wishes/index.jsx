import { useState } from 'react';
import { webapp } from '../../../utils/spreadsheet';
import toast from 'react-hot-toast';

export default function Wishes() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [loading, setLoading] = useState(false);

  const sendWish = async (e) => {
    e.preventDefault();
    setLoading(true);
   
    if (!name.trim() || !wish.trim()) {
      toast.error("Masih ada data yang belum terisi");
      setLoading(false);
      return;
    }

    try {
      const CompleteformData = new FormData();
      CompleteformData.append("timestamp", new Date().toISOString());
      CompleteformData.append("name", name.trim());
      CompleteformData.append("wish", wish.trim());

      const res = await fetch(webapp, {
        method: "POST",
        body: CompleteformData,
      });

      if (!res.ok) throw new Error("Gagal kirim ke Google Sheet");

      setName("");
      setWish("");
      toast.success("Data berhasil dikirim!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div 
        className="" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1040 }}
      ></div>

      <div 
        className="" 
        tabIndex="-1" 
      >
        <div className="bgCouple position-relative">
          <div className="mx-4 p-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="p-4 text-center">
              <div className="row">
                <p className="col-6 mb-4 fs-1 mt-2 fst-italic cormorantInfant fw-bold secondaryText" style={{ textAlign: 'start' }}>Wishes</p>
                <div className="col-6 d-flex flex-column">
                    <span className="text-center m-0 h-50"></span>
                    <p className="text-center border-3 border-top border-1 border-prime mt-4 p-0 h-50 w-100"></p>
                </div>
              </div>  

              <form name="dvt8" id='form' className="text-start" onSubmit={sendWish}>
                <div className="form-floating mb-3">
                  <input 
                    type="text"
                    className="form-control shadow"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    name="name"
                    />
                  <label className="text-muted">Nama</label>
                </div>
                
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className="form-control shadow"
                    placeholder="Harapan"
                    value={wish} 
                    onChange={(e) => setWish(e.target.value)}
                    disabled={loading}
                    name="wish"
                  />
                  <label className="text-muted">Harapan</label>
                </div>

                <button 
                  type="submit" 
                  className="buttonPrimary text-white btn d-flex align-align-items-end justify-content-center w-100 shadow"
                  disabled={loading}
                >
                  {loading ? 'Mengirim...' : 'Kirim'}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
