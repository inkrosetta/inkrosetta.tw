<script lang="ts">
  import Block from '../../components/Block/Block.svelte'
  import {container} from './AudienceFolksBlock.css'
  import BlockTitle from '../../components/BlockTitle/BlockTitle.svelte'
</script>

<Block>
  <div class={container}>
    <BlockTitle>
      對一般民眾的影響
    </BlockTitle>

    <ol>
      <li>查看圖卡發佈部門</li>
      <li>可搜尋、可溯源的圖卡內容</li>
      <li>政府機關的資訊及公告中心</li>
    </ol>
  </div>

  <div class={container}>
    <BlockTitle>
      對外語人士、<br/>視障人士的影響
    </BlockTitle>

    <ol>
      <li>查看外語版本或是利用文字朗讀功能檢視圖卡資訊</li>
      <li>使用無障礙功能瀏覽網頁</li>
      <li>支援社群協作完善翻譯版本</li>
      <li>可透過圖卡與政府機關職員溝通</li>
    </ol>
  </div>
</Block>
