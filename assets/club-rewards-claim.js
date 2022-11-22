/* CLUB - processes Club Rewards 'Claim Credits' function on accounts page, sends to Pipedream and updates with response */

window.addEventListener('DOMContentLoaded', () => {

    var action_url = document.getElementById("rewards_claim").action;
    var credits = document.getElementById("credits").value;
    var customer_id = document.getElementById("customer_id").value;

    document.getElementById("rewards_claim_submit").addEventListener("click", function(event){
        // console.log(action_url, credits, customer_id);
        this.disabled = 'true';
        this.setAttribute('aria-disabled', true);
        this.classList.add('loading');
        this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

        let data = {
            credits: credits,
            customer_id: customer_id
        };

        fetch(action_url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.getElementById("rewards_container").style.display = "none";
            document.getElementById("rewards_success").style.display = "block";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("rewards_container").style.display = "none";
            document.getElementById("rewards_error").style.display = "block";
        });

        event.preventDefault()
    });
        
  });