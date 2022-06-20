<script lang="ts">
  import Block from '$lib/components/Block/Block.svelte'
  import BlockTitle from '$lib/components/BlockTitle/BlockTitle.svelte'
  import {crewmates} from './crewmates'
</script>

<Block>
  <BlockTitle>
    團隊
  </BlockTitle>

  <ul>
    {#each crewmates as crew}
      <li>
        {#if crew.link}
          <a href={crew.link}>
            {crew.displayName}
          </a>
        {:else}
          <span>
            {crew.displayName}
          </span>
        {/if}
      </li>
      {/each}
  </ul>

</Block>
