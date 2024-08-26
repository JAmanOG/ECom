import { useState } from "react";
import { databases } from "../../Services/database";
import conf from "../../Services/conf";

function useSubmit(post, user,orderId, formdata) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const data = {
        firstname: formdata.firstname.value,
        lastname: formdata.lastname.value,
        country: formdata.country.value,
        city: formdata.city.value,
        state: formdata.state.value,
        zip: formdata.zip.value,
        email: formdata.email.value,
        phone: formdata.phone.value,
        address: formdata.address.value,
        StreetAddress: formdata.StreetAddress.value,
        Instructions: formdata.Instructions.value,
        PaymentMethod: formdata.PaymentMethod.value,
        user: user,
        orderId: orderId,
        OrderData: formdata.OrderData.value,
      };

      if (post) {
        await databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.collectionId,
          post.$id,
          data
        );
      } else {
        await databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteProductformsCollectionId,
          "unique()",
          data
        );
      }

      Object.keys(formdata).forEach((key) =>
        formdata[key].setValue("")
      );
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
}

export default useSubmit;
