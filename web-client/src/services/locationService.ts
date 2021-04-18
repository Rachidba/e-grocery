import { Location } from './../store/types';

export function getMyLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          reject(
            "Merci d'autoriser l'application à connaitre votre localisation afin de continuer",
          );
        },
      );
    }
  });
}
