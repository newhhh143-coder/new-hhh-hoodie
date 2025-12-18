import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Phone } from "lucide-react";

export default function NewHHHHoodieWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="max-w-5xl w-full rounded-2xl shadow-xl">
        <CardContent className="grid md:grid-cols-2 gap-10 p-8">
          
          {/* Hoodie Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src="/hoodie.png"
              alt="NEW HHH Hoodie"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Hoodie Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold mb-3">NEW HHH Hoodie</h1>

            <p className="text-gray-700 mb-4 text-lg">
              प्रीमियम क्वालिटी सफेद हुडी जिस पर “NEW HHH” एम्ब्रॉयडरी लोगो है।
              सर्दियों और डेली वियर के लिए परफेक्ट।
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-5">
              <li>100% कॉटन ब्लेंड</li>
              <li>सॉफ्ट और कंफर्टेबल</li>
              <li>यूनिसेक्स डिज़ाइन</li>
              <li>साइज़: S, M, L, XL</li>
            </ul>

            <p className="text-3xl font-semibold mb-6">₹1,999</p>

            <div className="flex gap-4">
              <Button className="rounded-2xl px-6 py-3 flex gap-2">
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </Button>

              <Button variant="outline" className="rounded-2xl px-6 py-3 flex gap-2">
                <Phone class
