<script lang="ts">
  import Block from '$lib/components/Block/Block.svelte'
  import BlockTitle from '$lib/components/BlockTitle/BlockTitle.svelte'
  import {block} from './TaglineBlock.css'
</script>

<Block className={block}>
  <BlockTitle>
    我們要建立一個易用、易讀的資訊圖卡系統
  </BlockTitle>

  <p>
    讓民眾在利用圖卡傳遞資訊的同時，提供可溯源、可翻譯的功能
  </p>
</Block>
