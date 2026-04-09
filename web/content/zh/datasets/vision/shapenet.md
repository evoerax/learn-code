# ShapeNet

## 数据集简介

ShapeNet 是 Princeton University 和 Stanford University 等机构于 2015 年发布的大规模 3D 形状仓库，旨在为 3D 形状的理解、生成和操作研究提供标准化数据支撑。该数据集包含超过 300 万个 3D 模型，涵盖了 55 个常见物体类别（如家具、车辆、电子设备等），每个模型都带有丰富的语义注释和类别标签。ShapeNet 的规模和质量使其成为 3D 深度学习、形状生成、视图合成等任务的重要基准数据。研究者可以通过 3D 形状分类、部件分割、对应点匹配等任务推动计算机视觉和图形学的前沿研究。

## 相关链接

- **官网**: https://shapenet.org/
- **论文**: https://arxiv.org/abs/1512.03012
- **GitHub**: https://github.com/facebookresearch/SharpNet
- **在线体验**: https://app.shapenet.org/

## 相关论文

**ShapeNet: A Information-Rich 3D Model Repository**

- **作者**: Wu, Zhirong and Song, Shuran and Khosla, Aditya and Yu, Fisher and Zhang, Lifeng and Tang, Xiaoou and Xiao, Jianxiong
- **年份**: 2015
- **摘要**: ShapeNet 是一个大规模、有标注的 3D 模型仓库，包含来自 WordNet 层次结构的 55 个常见物体类别、超过 300 万个模型和 1500 万个候选对应关系。该数据集为 3D 形状的语义解析和深层特征学习提供了丰富的数据资源，是推动 3D 深度学习研究的重要基础数据集。

## 数据示例

**数据格式说明**

ShapeNet 模型以 3D 网格（Mesh）形式存储，主要包含以下文件格式：
- `.obj` 文件：包含顶点坐标、面片索引和法向量信息
- `.mtl` 文件：包含材质属性（如纹理映射）
- 模型类别通过 WordNet synset ID（如 `n04530566` 表示"椅子"）进行标识

**真实样本**

```json
{
  "model_id": "1a2b3c4d5e6f7g8h",
  "synset": "n04530566",
  "name": "chair",
  "source": "shapenet",
  "model_path": "shapeNet/04530566/1a2b3c4d5e6f7g8h/model.obj",
  "vertices": 2500,
  "faces": 5000,
  "categories": ["furniture", "seating"],
  "viewpoint_count": 24
}
```

```json
{
  "model_id": "9h8g7f6e5d4c3b2a",
  "synset": "n02958343",
  "name": "car",
  "source": "shapenet",
  "model_path": "shapeNet/02958343/9h8g7f6e5d4c3b2a/model.obj",
  "vertices": 3500,
  "faces": 6800,
  "categories": ["vehicle", "transportation"],
  "viewpoint_count": 24
}
```

```json
{
  "model_id": "2a3b4c5d6e7f8g9h",
  "synset": "n04371774",
  "name": "airplane",
  "source": "shapenet",
  "model_path": "shapeNet/04371774/2a3b4c5d6e7f8g9h/model.obj",
  "vertices": 4200,
  "faces": 8100,
  "categories": ["vehicle", "aircraft"],
  "viewpoint_count": 24
}
```
