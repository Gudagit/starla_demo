import React from 'react'

import WSPGallery from '../component/WSPGallery'
import Navbar from '../component/Navbar'

function Galeri() {

  const galleryImages =[
    {
      img:"https://images-workbench.99static.com/l1qWicZzvxaqA5OHNAM33zKlJ9s=/99designs-contests-attachments/132/132479/attachment_132479589"
     },
     {
      img:"https://images-workbench.99static.com/B7byM8Wk1MHaldLYHc98XtJBRXg=/99designs-contests-attachments/130/130899/attachment_130899340"
     },
     {
      img:"https://images-workbench.99static.com/YXvxCAjgZ3EEecXSmdK6wS8H7zE=/99designs-contests-attachments/127/127626/attachment_127626099"
     },
     {
      img:"https://images-workbench.99static.com/X1PkPhT430qurSXB-4VaWVayaoc=/99designs-contests-attachments/125/125278/attachment_125278143"
     },
     {
      img:"https://images-workbench.99static.com/nX38twu4AIVNvOgPivWwI88pJAA=/99designs-contests-attachments/123/123254/attachment_123254019"
     },
     {
      img:"https://images-workbench.99static.com/_556T9_DD1FngWfiKjMT7lxFObg=/99designs-contests-attachments/123/123980/attachment_123980001"
     },
     {
      img:"https://images-workbench.99static.com/a6UYC3Mie9tRd85EfI3CDnBb_DI=/99designs-contests-attachments/127/127005/attachment_127005390"
     },
     {
      img:"https://images-workbench.99static.com/Izu8Dq_vqJIpMNoKUa6pMDSBfck=/99designs-contests-attachments/127/127503/attachment_127503867"
     },
     {
      img:"https://images-workbench.99static.com/Q9EERIvLPyk9GDI62VN37z3JMEI=/99designs-contests-attachments/132/132008/attachment_132008314"
     },
     {
      img:"https://images-workbench.99static.com/aZSI6BtN1egc0sCokv5JrHUxioA=/99designs-contests-attachments/120/120145/attachment_120145940"
     },
     {
      img:"https://images-workbench.99static.com/e-eHg0YTBK4mo3wYiOLjpg0gcjg=/99designs-contests-attachments/120/120101/attachment_120101252"

     },
     {
      img:"https://images-workbench.99static.com/BbZfL766nAAn_hl7ItIZnWX6xTo=/99designs-contests-attachments/118/118306/attachment_118306497"
     },
     {
      img:"https://images-workbench.99static.com/Vv20MlxBwvCNSpTZw6IK8u10eto=/99designs-contests-attachments/113/113596/attachment_113596938"
     },
     {
      img:"https://images-workbench.99static.com/m4ap-7d6TxQFikvBgK0r4Km6mlg=/http://s3.amazonaws.com/projects-files/71/7177/717780/8af423c4-5386-4602-ae9b-777823050c71.jpg"
     },
     {
      img:"https://images-workbench.99static.com/GSaHMt_iilwfkHlwOTzvvj0L1jM=/99designs-contests-attachments/89/89147/attachment_89147555"
     },
     {
      img:"https://images-workbench.99static.com/7dY8DGdlN073TODcLqgtSlOCA4U=/fit-in/filters:fill(white)/handover-files/93/9301/930185/7979c173-6797-49b9-aef5-36e93704e472.gif"
     },
     {
      img:"https://images-workbench.99static.com/DrfE3sDGTFH6w7uvt8z_FkQd-fU=/fit-in/filters:fill(white)/handover-files/90/9017/901718/15e183c6-50fc-416c-8785-3248cc5a51b2.gif"
     },
     {
      img:"https://images-workbench.99static.com/d21pYXukC173oqBssXCgYdPxzGo=/fit-in/filters:fill(white)/handover-files/88/8883/888370/77a50762-b3da-4585-b2f5-d8658640a84d.gif"
     },
     {
      img:"https://images-workbench.99static.com/x9TZN5AUK4U-aL3KLanAgqv8B_8=/fit-in/filters:fill(white)/handover-files/87/8740/874004/e169cad8-ae4d-4d6e-8673-c6bd0280f817.gif"
     },
     {
      img:"https://images-workbench.99static.com/NM_GyoDzDB6eDPFZXp7j4DbxJyU=/fit-in/filters:fill(white)/handover-files/80/8099/809955/4cb77050-cbee-4693-a24b-e39926946f3f.gif"
     }
  ]

  return (
    <div>
    <Navbar />
      <WSPGallery 
      galleryImages = {galleryImages}
    />
    </div>
  )
}

export default Galeri