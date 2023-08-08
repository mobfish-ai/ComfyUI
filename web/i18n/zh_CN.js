export default {
    translation: {
        "ui.queue_btn": "冲冲冲",
        "ui.queue_front_btn": "插队冲冲冲",
        "ui.view_queue_btn": "查看队列",
        "ui.view_history_btn": "查看历史",
        "ui.save_btn": "保存",
        "ui.load_btn": "加载",
        "ui.refresh_btn": "刷新",
        "ui.clipspace_btn": "Clipspace",
        "ui.clear_btn": "清空",
        "ui.load_default_btn": "加载默认配置",
        "ui.close_btn": "关闭",
        "ui.queue_size": "队列数量: ",
        "ui.extra_options": "额外选项",

        "ui.settings.title": "设置",

        "ui.canvas_menu_add_node": "添加节点",
        "ui.canvas_menu_add_group": "添加组",

        "ui.node_panel.header.properties": "属性",
        "ui.node_panel.header.title": "标题",
        "ui.node_panel.header.mode": "模式",
        "ui.node_panel.header.color": "颜色",

        "node.title.KSampler": "采样器",
        "node.title.KSamplerAdvanced": "采样器 (高级)",
        // Loaders
        "node.title.CheckpointLoader": "Load Checkpoint (With Config)",
        "node.title.CheckpointLoaderSimple": "加载模型",
        "node.title.VAELoader": "Load VAE",
        "node.title.LoraLoader": "Load LoRA",
        "node.title.CLIPLoader": "Load CLIP",
        "node.title.ControlNetLoader": "Load ControlNet Model",
        "node.title.DiffControlNetLoader": "Load ControlNet Model (diff)",
        "node.title.StyleModelLoader": "Load Style Model",
        "node.title.CLIPVisionLoader": "Load CLIP Vision",
        "node.title.UpscaleModelLoader": "Load Upscale Model",
        // Conditioning
        "node.title.CLIPVisionEncode": "CLIP Vision Encode",
        "node.title.StyleModelApply": "Apply Style Model",
        "node.title.CLIPTextEncode": "CLIP Text Encode (Prompt)",
        "node.title.CLIPSetLastLayer": "CLIP Set Last Layer",
        "node.title.ConditioningCombine": "Conditioning (Combine)",
        "node.title.ConditioningAverage ": "Conditioning (Average)",
        "node.title.ConditioningConcat": "Conditioning (Concat)",
        "node.title.ConditioningSetArea": "Conditioning (Set Area)",
        "node.title.ConditioningSetMask": "Conditioning (Set Mask)",
        "node.title.ControlNetApply": "Apply ControlNet",
        "node.title.ControlNetApplyAdvanced": "Apply ControlNet (Advanced)",
        // Latent
        "node.title.VAEEncodeForInpaint": "VAE Encode (for Inpainting)",
        "node.title.SetLatentNoiseMask": "Set Latent Noise Mask",
        "node.title.VAEDecode": "VAE Decode",
        "node.title.VAEEncode": "VAE Encode",
        "node.title.LatentRotate": "Rotate Latent",
        "node.title.LatentFlip": "Flip Latent",
        "node.title.LatentCrop": "Crop Latent",
        "node.title.EmptyLatentImage": "Empty Latent Image",
        "node.title.LatentUpscale": "Upscale Latent",
        "node.title.LatentUpscaleBy": "Upscale Latent By",
        "node.title.LatentComposite": "Latent Composite",
        "node.title.LatentBlend": "Latent Blend",
        "LatentFromBatch": "Latent From Batch",
        "node.title.RepeatLatentBatch": "Repeat Latent Batch",
        // Image
        "node.title.SaveImage": "Save Image",
        "node.title.PreviewImage": "Preview Image",
        "node.title.LoadImage": "Load Image",
        "node.title.LoadImageMask": "Load Image (as Mask)",
        "node.title.ImageScale": "Upscale Image",
        "node.title.ImageScaleBy": "Upscale Image By",
        "node.title.ImageUpscaleWithModel": "Upscale Image (using Model)",
        "node.title.ImageInvert": "Invert Image",
        "node.title.ImagePadForOutpaint": "Pad Image for Outpainting",
        // _for_testing
        "node.title.VAEDecodeTiled": "VAE Decode (Tiled)",
        "node.title.VAEEncodeTiled": "VAE Encode (Tiled)",

        "node.input.CheckpointLoaderSimple.ckpt_name": "模型文件",
        "node.input.SaveImage.filename_prefix": "文件名前缀",
        "node.input.SaveImage.images": "图片",

        "node.output.CheckpointLoaderSimple.MODEL": "模型",

        "category.conditioning": "可调参数",
        "category.loaders": "加载器",
        "category.latent": "潜在",
        "category.latent/inpaint": "潜在/修复",
        "category.latent/batch": "潜在/批量",
        "category.image": "图像",
        "category.mask": "遮罩",
        "category.image/upscaling": "图像/外扩",
        "category.sampling": "采样",
        "category._for_testing": "测试",
        "category.latent/transform": "潜在/转换",
        "category.advanced/loaders": "高级/加载器",
        "category.conditioning/style_model": "可调参数/风格模型",
        "category.conditioning/gligen": "可调参数/gligen",
        "category.advanced/loaders/deprecated": "高级/加载器/已弃用",
        "category.advanced/conditioning": "高级/可调参数",
        "category.image/postprocessing": "图像/后期处理",
        "category.advanced/model_merging": "高级/模型合并",
        "category.image/preprocessors": "图像/前期处理",
        "category.utils": "工具",

        "settings.Comfy.ConfirmClear": "清空工作流需要确认",
        "settings.Comfy.PromptFilename": "Prompt for filename when saving workflow",
        "settings.Comfy.PreviewFormat": "预览图格式和压缩尺寸, e.g. webp, jpeg, webp;50, etc.",
        "settings.Comfy.DisableSliders": "Disable sliders.",
        "settings.Comfy.DevMode": "启用开发模式",
        "settings.Comfy.ColorPalette": "主题",
        "settings.Comfy.EditAttention.Delta": "Ctrl+up/down precision",
        "settings.Comfy.InvertMenuScrolling": "反转滚动",
        "settings.Comfy.LinkRenderMode": "链接渲染模式",
        "settings.Comfy.NodeSuggestions.number": "Number of nodes suggestions",
        "settings.Comfy.SnapToGrid.GridSize": "单元格尺寸",
        "settings.Comfy.Logging.Enabled": "记录日志",
        "settings.Comfy.MenuPosition": "保存菜单位置",
        "settings.Comfy.ColorPalette.export": "导出",
        "settings.Comfy.ColorPalette.import": "导入",
        "settings.Comfy.ColorPalette.template": "模版",
        "settings.Comfy.ColorPalette.delete": "删除",
    }
}