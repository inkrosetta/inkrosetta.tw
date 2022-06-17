<script lang="ts">
  import {logo, logoContainer, title} from './IndexBlock.css'
  import Block from '../../components/Block/Block.svelte'
</script>

<Block>
  <div class={logoContainer}>
    <img class={logo} src="$lib/assets/images/logo.svg" alt="logo" />

    <h1 class={title}>畫文好譯圖卡</h1>
  </div>
</Block>
