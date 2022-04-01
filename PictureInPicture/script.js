const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt user to select media stream ,pass to video element and play

async function selectMediaStram() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch Error here
    console.log("Whoops error here:", error);
  }
}

button.addEventListener("click", async () => {
  //Disable button
  button.disabled = true;
  //Start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset button
  button.disabled = false;
});

//On load(calling)
selectMediaStram();
