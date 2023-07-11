---
permalink: /faq/
title: "Frequently Asked Questions"
layout: collection
author_profile: true
classes: wide
---

**1) What is your work about?**  
How do we see, think, and experience the world? The working title of my PhD project is "Neural coding with synthesized reality". In brief, I study how the brain represents and processes information through patterns of neural activity via generative models that can synthesize visual data resembling real-world photographs. Like the brain, such generative models also have a compressed _internal representation_ of the data they generate, which turned out to be very similar to the brain's _internal representation_ when looking at these same images. This correspondence allowed us to successfully reconstruct perceived images from recorded brain activity (<a href="/work/hyper" style="color: #92A8D1;"><i>hyper</i></a>, <a href="/work/brain2gan" style="color: #E15D44;"><i>brain2gan</i></a>). As such, I hope to contribute to a deeper understanding of the neural mechanisms that shape our perceptions and experiences and shape who we are. 

**2) What is the dataset you used?**  
In the project <a href="/work/hyper" style="color: #92A8D1;"><i>hyper</i></a>, we synthesized face images using a <a href="https://github.com/tkarras/progressive_growing_of_gans">Progressively Grown GAN (PGGAN)</a> which we showed to two volunteers in an MRI scanner while monitoring their brain activity. In the project <a href="/work/brain2gan" style="color: #E15D44;"><i>brain2gan</i></a>, we synthesized face and natural images with <a href="https://github.com/NVlabs/stylegan3">StyleGAN3</a> and <a href="https://github.com/autonomousvision/stylegan-xl">StyleGAN-XL</a>, respectively, that we showed to a macaque with cortical implants. In the next step, we will investigate how well our decoding method extends to visual perception of real photographs. Note that the results of these studies already provide valid reconstructions of visual perception, regardless of the nature of the stimuli themselves.

**3) Why is neural decoding currently working so well?**  
Neural decoding has made ramarkable strides in recent years due to the advancements in deep learning in general and generative modeling in particular, which have enabled the generation of highly realistic and detailed synthetic images. Deep neural networks, the foundation of generative models, process information about the external world very similarly to the brain. As a result, the internal activations of the brain and the model can be aligned, bridging the gap between the internal brain activity and the external world it represents.

**4) Would it also be possible to read out imagination and dreams?**  
While significant progress has been made in understanding and decoding neural activity related to sensory experiences, decoding the complex and abstract nature of imagination and dreams remains a challenge. <a href="https://doi.org/10.1016/j.tics.2019.02.004">Earlier studies</a> have found neural overlap between visual perception and mental imagery, such that when someone vividly imagines a specific object or scene, the visual cortex can exhibit patterns of neural activity similar to those observed during actual visual perception. This shared neural activity suggests that there is a connection between the brain's representation of external sensory input and its internal generation of mental imagery. Ongoing studies continue to explore this intriguing possibility.

**5) Are there any ethical concerns?**  
One key concern relates to the protection of people's mental privacy. First and foremost, obtaining informed consent is paramount. To respect individuals' privacy rights, human volunteers participating in neural decoding studies should have a comprehensive understanding of the research objectives, procedures involved, potential risks and benefits, and how their data will be utilized and protected. Eventually, those who could benefit from this technology, for instance people with communication disabilities, should be given appropiate access and support. As with any technology, there is a risk of biases and misinterpretations in the decoding process. Given the nascent nature of neural decoding, scientists and ethicists should collaborate closely to navigate and address the potential ethical issues. Transparency and open communication are also essential; the public should be informed about the possibilities, limitations, and implications for mental privacy, fostering collective decision-making processes that align with societal values.

**6) Can brain reading be involuntary?**  
No, it is not possible to read brain activity without an aware and consenting participant. Our work requires brain surgery or very big and loud devices. It requires constant and complete participant cooperation to decode very specific information from the brain.

**7) Will it become available to the public soon?**  
Accessibility to the public depends on further development, validation, and ethical considerations, which may take time. Furthermore, the brain recording devices that we used are not easily accessible for in-house use; they are expensive, require specialized maintenance, and are typically found in clinical or research settings.

**8) What about decoding using EEG (Electroencephalography)?**  
The potential varies depending on the specific decoding task; EEG has its own strengths and limitations compared to other techniques. However, decoding more complex information, such as reconstructing perceived images or detailed representations, may currently pose challenges. However, the field of EEG-based decoding is evolving, and with further advancements, we may witness expanded possibilities for decoding using EEG in the future.



<!-- **Q: Could we apply a model trained on one subject to someone else's brain?**  
Not directly because brain are wired differently. But there are ways, such as hyperalignment, as we did in this blog post.
Applying a model trained on one individual to another person's brain may require adaptation or additional training due to individual differences. -->

<!-- **Q: Brain reading of pets?**  
Dogs in the scanner, but they need to be in the scanner. -->