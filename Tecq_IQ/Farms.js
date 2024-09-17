
//! sidebar
function showSidebar() {
    document.querySelector('#sidebar').style.display =
        (document.querySelector('#sidebar').style.display == 'none') ? 'block' : 'none';

}



// FARMS
        function toggleSelection(row, event) {
            if (event.target.type !== 'checkbox') {
                // First clear all selections
                document.querySelectorAll('.row.selected').forEach(selectedRow => {
                    selectedRow.classList.remove('selected');
                });
                // Then toggle the 'selected' class on the clicked row
                row.classList.add('selected');
            }
        }

        function selectAllFarms(source) {
            let checkboxes = document.getElementsByName('farm');
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = source.checked;
                // Update the 'selected' class for each row based on the checkbox.
                checkboxes[i].parentNode.classList.toggle('selected', source.checked);
            }
        }
        // Define status labels as variables
        const statusOnline = "Online";
        const statusOffline = "Offline";
        const subscriptionActive = "Active";
        const subscriptionExpired = "Expired";

        window.onload = () => {
            // Apply the status labels to your elements here
            document.querySelectorAll('.status-online').forEach(element => {
                element.innerHTML = statusOnline;
            });

            document.querySelectorAll('.status-offline').forEach(element => {
                element.innerHTML = statusOffline;
            });

            document.querySelectorAll('.subscription-active').forEach(element => {
                element.innerHTML = subscriptionActive;
            });

            document.querySelectorAll('.subscription-expired').forEach(element => {
                element.innerHTML = subscriptionExpired;
            });
        };
  