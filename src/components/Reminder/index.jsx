import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Reminder = () => {
  return (
    <AddToCalendarButton
        name="Sisin & Ikhtiar Wedding (Resepsi)"
        location="Masjid Agung Asy-Syuhada, Jl. Mesigit No.23, Gladak Anyar, Barurambat Kota, Kec. Pamekasan, Kabupaten Pamekasan, Jawa Timur 69317"
        startDate="2025-10-19"
        useUserTZ="true"
        size='2'
        options="['Apple','Google']"
        // buttonStyle='text'
        styleLight="--btn-background: #92b07d; --btn-text: #fff; --font: Georgia, 'Times New Roman', Times, serif;"
        // styleDark="--btn-backgrou  nd: #000;"
        hideIconButton={true}
        listStyle='dropdown'
        lightMode="bodyScheme"
    ></AddToCalendarButton>
  )
}

export default Reminder;