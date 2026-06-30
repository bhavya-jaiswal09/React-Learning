import React from 'react'

const UserCard = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <div
          style={{
            width: "320px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "20px",
            border: "1px solid #e5e7eb",
            transition: "0.3s",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {props.item.name.charAt(0)}
          </div>

          {/* Name */}
          <h2
            style={{
              margin: "0",
              color: "#1f2937",
            }}
          >
            {props.item.name}
          </h2>

          <hr
            style={{
              margin: "15px 0",
              border: "0",
              borderTop: "1px solid #ddd",
            }}
          />

          <p><strong>Username:</strong> {props.item.username}</p>

          <p><strong>Email:</strong> {props.item.email}</p>

          <p><strong>Phone:</strong> {props.item.phone}</p>

          <p><strong>Website:</strong> {props.item.website}</p>

          <p><strong>Company:</strong> {props.item.company.name}</p>

          <p><strong>City:</strong> {props.item.address.city}</p>
        </div>
      </div>
    </>
  )
}

export default UserCard