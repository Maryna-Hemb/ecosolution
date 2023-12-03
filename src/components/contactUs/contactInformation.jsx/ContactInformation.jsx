import ContactsInf from "../../../data/contactsData.json";
export const ContactInformation = () => {
  return (
    <>
      <h2>Contact us</h2>
      <ul>
        <li>
          <p>Phone:</p>
          <ul>
            <li>
              <a href={`tel:${ContactsInf.phone1}`}>{ContactsInf.phone1}</a>
            </li>
            <li>
              <a href={`tel:${ContactsInf.phone2}`} aria-label="phone number">
                {ContactsInf.phone2}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p>E-mail:</p>
          <a href={`mailto:${ContactsInf.email}`} aria-label="e-mail">
            {ContactsInf.email}
          </a>
        </li>

        <li>
          <p>Address:</p>
          <a
            href={`http://maps.google.com/?q=:${ContactsInf.address}`}
            target="_blank"
            rel="noreferrer"
            aria-label="address"
          >
            {ContactsInf.address}
          </a>
        </li>
        <li>
          <p>Social Networks:</p>
          <ul>
            <li>
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
                aria-label="facebook link"
              ></a>
            </li>
            <li>
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
                aria-label="instagram link"
              ></a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
