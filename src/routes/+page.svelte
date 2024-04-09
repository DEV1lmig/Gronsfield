  <script>
    import { writable } from 'svelte/store';

    const inputText = writable('');
    const key = writable('');
    const encryptedText = writable('');

    function encrypt() {
      const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const shift = $key.split('').map(char => parseInt(char));

      encryptedText.set($inputText
        .split('')
        .map((char, index) => {
          const charIndex = alphabet.indexOf(char);
          const shiftedIndex = (charIndex + shift[index % shift.length]) % alphabet.length;
          return alphabet[shiftedIndex];
        })
        .join(''));
    }
  </script>
  <div class="flex flex-col w-full m-0 justify-center items-center place-items-center">
    <h1 class="mb-0 mt-10 text-4xl">Gronsfield Encrypter</h1>
    <div class="flex flex-col w-max justify-center m-20">
      <div class="flex flex-col h-full card bg-base-300 rounded-box px-20 py-14 gap-5">      
        <label for="input">Texto de entrada:</label>
        <input class="input input-bordered w-full max-w-xs" type="text" id="input" bind:value={$inputText} />
    
        <label for="key">Clave de cifrado:</label>
        <input class="input input-bordered w-full max-w-xs" type="text" id="key" bind:value={$key} />
      </div>

      <div class="flex flex-col self-center divider lg:divider-horizontal">
        <button class="btn btn-glass btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={encrypt}>Cifrar</button>
      </div>
        {#if $encryptedText}
          <div class="flex h-full card bg-base-300 rounded-box px-20 py-14 gap-3 items-center">
            <h3>Texto cifrado:</h3>
            <textarea class="textarea textarea-bordered" bind:value={$encryptedText}></textarea>
            <h3>Clave de descifrado:</h3>
            <p>{$key}</p>
          </div>
        {/if}
    </div>
  </div>