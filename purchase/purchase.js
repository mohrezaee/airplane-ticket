let ticket = localStorage.getItem("ticket");
ticket = JSON.parse(ticket);

let table = document.getElementById("passenger-table");
table.innerHTML = table.innerHTML + 
`
<tr>
    <td>
        <input class="text-input" type="string" name="fullname" placeholder="نام مسافر">
    </td>
    <td>
        <input class="text-input" type="string" name="passport-number" placeholder="شماره گذرنامه مسافر">
    </td>
    <td>
` +  ticket.price + `
    </td>
</tr>
`