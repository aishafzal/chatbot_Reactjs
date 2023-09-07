const InitialLogo = (userObj) => {
    return (
      <div>
        {userObj.userObj.map((userData, index) => {
          return (
            <div
              key={index}
              style={{
                width: "32px",
                height: "32px",
                // margin: "auto",
                display: "flex",
                 marginTop: "100px",
                 marginBottom: "100px",
                borderRadius: "100px",
                backgroundColor: "black",
                position: "relative",
                left:"-40px",  
              }}
              >
                <p
              style={{
                margin: "auto", 
                fontSize: "10px",
                color: "black",
                height: "30px",
                width: "30px",
                backgroundColor: userData.color,
                borderRadius: "100px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                
              }}
            >
              {userData.name.charAt(0)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InitialLogo;